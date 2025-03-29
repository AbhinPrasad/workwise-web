"use client"

export default function OpenEmailApp() {
  const handleClick = () => {
    window.location.href = "mailto:"
    // window.open("https://mail.google.com/", "_blank")
  }

  return (
    <button
      className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      onClick={handleClick}
    >
      Open Email App
    </button>
  )
}
