import Image from 'next/image'

export default () => {
  return (
    <Image
      src="/404.webp"
      alt="404"
      // layout="fill"
      width={625}
      height={416}
    />
  )
}