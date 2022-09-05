import Image from 'next/image';
import logo from '../images/logos/AgoraCanLogo.jpg';

export function Logo(props) {
  return (
    <Image src={logo} aria-hidden="true" width={600} height={270} {...props}/>
  )
}
