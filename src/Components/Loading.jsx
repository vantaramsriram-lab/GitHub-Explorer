
const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col mt-20 items-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-pink-600"></div>

      <p className="text-lg font-semibold text-gray-700">
        Loading...
      </p>
    </div>
  )
}

export default Loading