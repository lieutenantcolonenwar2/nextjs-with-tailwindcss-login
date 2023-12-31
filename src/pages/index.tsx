import Head from 'next/head'
import { NextPage } from "next";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-blue-200">
        <div className="bg-white p-8 shadow-md rounded-md w-full sm:max-w-md">
          <h2 className="text-center text-black text-2xl font-semibold mb-4">
            Login
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
            <button
              type="submit"
              className="mt-2 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
            >
              Login
            </button>
            <p className="mt-4 text-sm text-center text-gray-700">
              Belum memiliki Akun?
              <Link
                href="/register"
                className="font-medium text-blue-600 hover:underline"
              >
                Registrasi
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
