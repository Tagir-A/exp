import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { TicTacToe } from '../../features/types/TicTacToe'

export default function TicTacToePage() {
  return (
    <>
      <Head>
        <title>Tic Tac Toe</title>
      </Head>
      <h1>Tic Tac Toe</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
      <TicTacToe />
    </>
  )
}
