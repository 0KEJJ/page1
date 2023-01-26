import {useRouter} from "next/router"
import {cinfo} from 'components/console info';

cinfo();
function HomePage() {
  const router = useRouter();
  return <div>
  <center>Hello World</center>
  <button onClick={() => {router.push('index2').then(r => {})}}>Test</button>
  </div>
}

export default HomePage