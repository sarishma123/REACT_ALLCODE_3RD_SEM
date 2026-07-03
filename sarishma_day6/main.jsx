import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CountApp from './day6handson/incrementanddecrement'
import ToggleButton from './day6handson/toggelbuttton'
import TextInputApp from './day6handson/showentrtext'
import ThemeSwitcher from './day6handson/darkthemetoggel'
import ToggleImage from './day6handson/imagehide'
import ClickTracker from './areaclick'
import PasswordToggle from './passvisibiltytoggel'
import QuoteGenerator from './newquotebutton'
import TrafficLight from './trafficlight'
import ColorPicker from './day6handson/changebgcolor'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountApp/>
    <ToggleButton/>
    <TextInputApp/>
    <ThemeSwitcher/>
    <ColorPicker/>
    <ToggleImage/>
    <ClickTracker/>
    <PasswordToggle/>
    <QuoteGenerator/>
    <TrafficLight/>
  </StrictMode>,
)
