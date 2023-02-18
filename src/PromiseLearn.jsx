import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";

class PromiseLearn extends Component {
  state = {
    text: "text kosong",
  };

  callFirstName = (cb) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Made");
      }, 1000);
    });
  };

  callLastName = (first) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(first + " " + "Manik");
      }, 1000);
    });
  };

  login = () => {
    this.callFirstName()
      .then((result) => {
        return this.callLastName(result);
      })
      .then((result2) => {
        this.setState({
          text: result2,
        });
      });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <section>
          <div className="flex justify-center border-spacing-5 mt-5">
            <button
              onClick={this.login}
              className="text-white leading-5 font-semibold text-sm py-2 px-5 rounded-full bg-sky-500 hover:bg-sky-700"
            >
              Save Changes
            </button>
          </div>
        </section>

        <section>
          <div className="flex justify-center p-5">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              {text}
            </h1>
          </div>
        </section>
      </div>
    );
  }
}

export default PromiseLearn;
