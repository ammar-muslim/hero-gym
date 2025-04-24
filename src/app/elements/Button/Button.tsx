"use client"

export default function Button() {
  return (
    <button
      className="px-4 py-2 bg-orange-500 cursor-pointer text-white rounded-md hover:bg-orange-600 transition-colors"
      onClick={() => { console.log("logout") }}
    >
      Logout
    </button>
  )
}