import { useEffect, useState } from "react"
import playlist from './data/test.json'

const App = () => {
  const [videoTag, setVideoTag] = useState('');

  useEffect(() => {
    videoHandler(playlist[0].url)
  }, [])

  const videoHandler = (url) => {
    const regex = /v=([^&]+)/
    const match = url.match(regex)
    setVideoTag(match[1])
    //console.log(match[1])
  }

  return (
    <div className="flex p-5">
      {
        <div className="p-5">
          <iframe className="rounded-lg" width="1120" height="630" src={`https://www.youtube.com/embed/${videoTag}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      }

      <div className="h-[95vh] overflow-y-auto pt-4">
        {playlist.map((list, index) => (
          <div key={index} className="bg-blue-600 text-white m-4 rounded-xl p-4 cursor-pointer" onClick={() => videoHandler(list.url)}>
            {index + 1}. {list.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App