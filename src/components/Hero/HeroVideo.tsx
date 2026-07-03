type Props = {
    videoUrl: {url: string}
  }
  
  export function HeroVideo({ videoUrl }: Props) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={videoUrl.url} type="video/mp4" />
      </video>
    )
  }