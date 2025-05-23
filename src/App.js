import React, { Component } from "react";
import Register from "./components/register";
import Login from "./components/login";
import Navbar from "./components/navbar";
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import DemoBlog from "./components/demo-blog";
import Header from "./components/header";
import Contact from "./components/contact";
import Create from "./components/create";
import BlogPost from "./components/BlogPost";



import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBY5Dq4pS4YjwA3UF8ATxPwwOQK-k8KjWE",
  authDomain: "first-project-27f8d.firebaseapp.com",
  databaseURL: "https://first-project-27f8d-default-rtdb.firebaseio.com",
  projectId: "first-project-27f8d",
  storageBucket: "first-project-27f8d.firebasestorage.app",
  messagingSenderId: "478931609179",
  appId: "1:478931609179:web:032ac127d61085806b817e"
};


if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      message: "",
      isLoggedIn: false,
      posts: [],
    };
  }


  componentDidMount() {
    const db = getDatabase();
    const dbRef = ref(db);
  
    get(child(dbRef, 'blogs')).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Convert object to array
        const blogsArray = Object.keys(data).map(id => ({
          id,
          ...data[id]
        }));
  
        console.log("Fetched blogs:", blogsArray);
        this.setState({ posts: blogsArray });
      } else {
        console.log("No blogs found");
      }
    }).catch((error) => {
      console.error("Error fetching blogs:", error);
    });
  }
  
  



  googleSignupHandler = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        this.setState({ isLoggedIn: true });
      })
      .catch((error) => {
        this.setState({ message: error.message });
      });
  };

  registrationHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      this.setState({ message: "Password and Confirm Password do not match" });
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        sendEmailVerification(user)
          .then(() => {
            console.log("Verification Email Sent");
          })
          .catch((error) => {
            console.error("Error sending email verification:", error.message);
          });

        console.log("User Registered:", user);
        this.setState({
          message:
            "User has been registered successfully. Please verify your email.",
        });
      })
      .catch((error) => {
        this.setState({ message: error.message });
      });
  };

  loginHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (!user.emailVerified) {
          this.setState({
            message: "Please verify your email before logging in.",
          });
          return;
        }
        this.setState({ message: "Login successful!", isLoggedIn: true });
      })
      .catch((error) => {
        this.setState({ message: error.message });
      });
  };

  pageSwitchHandler = () => {
    this.setState((prevState) => ({
      page: !prevState.page,
      message: "",
    }));
  };

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <BrowserRouter>
  <Navbar />
  <Routes>
    <Route
      path="/about"
      element={
        <>
          <Header
            backgroundImage="https://i.pinimg.com/originals/c7/e7/1b/c7e71bc6610ee119f7c2b05cc775c483.jpg"
            title="Let's Tell Everyone Your Story"
          />
          <About />
        </>
      }
    />
    <Route
      path="/demo-blog"
      element={
        <>
          <Header
            backgroundImage="https://www.iimtindia.net/Blog/wp-content/uploads/2021/05/Blogging-1024x576.jpg"
            title=""
          />
          <DemoBlog />
        </>
      }
    />
    <Route path="/create" element={<Create />} />
    <Route path="/contact" element={<Contact />} />
    
    {/* ✅ New Route for Individual Blog Post */}
    <Route
      path="/post/:id"
      element={
        <>
          <Header
            backgroundImage="https://images.unsplash.com/photo-1557800636-894a64c1696f"
            title="Blog Post"
          />
          <BlogPost posts={this.state.posts} />
        </>
      }
    />

    <Route
      path="/"
      element={
        <>
          <Header
            backgroundImage="https://images.unsplash.com/photo-1432821579285-1b649e5b1ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxOTY2NDU0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            title="Welcome To Devang's Blog"
          />
          <Home posts={this.state.posts} />
        </>
      }
    />
  </Routes>
  <Footer />
</BrowserRouter>

        ) : this.state.page ? (
          <Register
            google={this.googleSignupHandler}
            message={this.state.message}
            submit={this.pageSwitchHandler}
            register={this.registrationHandler}
          />
        ) : (
          <Login
            google={this.googleSignupHandler}
            message={this.state.message}
            login={this.loginHandler}
            submit={this.pageSwitchHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
