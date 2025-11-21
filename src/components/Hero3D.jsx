import Spline from '@splinetool/react-spline'

export default function Hero3D() {
  return (
    <div className="relative w-full h-[420px] md:h-[520px] lg:h-[640px] rounded-3xl overflow-hidden">
      <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-base/0 via-neutral-base/10 to-neutral-base" />
    </div>
  )
}
