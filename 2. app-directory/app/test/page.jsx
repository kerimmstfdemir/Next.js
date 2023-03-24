const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const TestRoute = async () => {
  await delay(3000)
  return (
    <div>Test Route</div>
  )
}

export default TestRoute