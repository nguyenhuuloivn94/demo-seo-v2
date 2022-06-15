import { isWeb } from '@monorepo/function-shares';
import dynamic from 'next/dynamic';
import Home from './home';

const App = dynamic(() => import('./AppShell'), {
  ssr: false,
});

export default function Index() {
  return  isWeb? <Home /> : <App/>;
}