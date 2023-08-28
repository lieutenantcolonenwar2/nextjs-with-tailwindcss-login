
import Link from "next/link";
import Head from "next/head";
import React from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";




// export default function RegistrasiPage() {
const RegistrasiPage = () => {
    const router = useRouter();
  return (
    <>
      <Head>
        <title>Registrasi</title>
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-blue-200">
        <div className="bg-white p-8 shadow-md rounded-md w-full sm:max-w-md">
          <h2 className="text-center text-black text-2xl font-semibold mb-4">
            Register
          </h2>
          <form>
            <div className="content">
              <label className="block mb-1 text-black">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring mb-2"
                placeholder="Masukkan Email Anda"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-black">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring"
                placeholder="Masukkan Password Anda"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-black">
                Konfirmasi Password
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring"
                placeholder="Masukkan Lagi Password Anda"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
            >
              Register
            </button>
            {/* <p className="mt-4 text-sm text-center text-gray-700">
              Sudah memiliki Akun?
              <Link
                href="/index.tsx"
                className="font-medium text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p> */}
            <p className="mt-4 text-sm text-center text-gray-700">
              Sudah memiliki Akun?
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  router.back();
                }}
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrasiPage;
