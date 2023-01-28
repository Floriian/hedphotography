import React from 'react';
import Layout from '../components/Layout';

function contact() {
  return (
    <div className="flex h-screen justify-center">
      <div className=" 0max-w-2xl m-auto rounded-md  shadow-md shadow-black">
        <h1 className="m-2 text-center text-2xl">Kapcsolat</h1>
        <form className="p-2">
          <div className="m-4">
            <label htmlFor="name">Név</label>
            <input
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="m-4">
            <label htmlFor="email">E-mail cím</label>
            <input
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="m-4">
            <button
              type="reset"
              className="w-full rounded-lg bg-green-500 p-2 text-white transition-colors duration-150 hover:bg-green-600"
            >
              Küldés
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
contact.Layout = Layout;
export default contact;
