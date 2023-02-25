'use client'

import Image from "next/image"
import {signOut} from "next-auth/react"
import Link from "next/link"

type User = {
    image: string
}

const Logged = ({image}: User) => {
    return (
        <li className="flex gap-8 items-center">
            <button onClick={() => signOut()} className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25">
                Sign out
            </button>
            <Link href={"/dashboard"}> 
                <Image
                    className="w-12 rounded-full" 
                    width={60} 
                    height={60} 
                    src={image}
                    alt="profile-photo" 
                />
            </Link>
        </li>
    )
}

export default Logged