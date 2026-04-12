import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './App.global.css';
import { FaCog } from 'react-icons/fa/';
import { useState } from 'react';
import SoundsView from './application/view/SoundsView';
import SettingsView from './application/view/SettingsView';
import TopBarComponent from './application/component/TopBarComponent';
import soundboardDomain from './domain/SoundboardDomain';
import logo from '../assets/logo.svg';

const globalShortcut = require('electron').remote?.globalShortcut;

export default function App() {
  const [stopAllSounds, setStopAllSounds] = useState([] as (() => void)[]);
  const registerSound = (stopSound: () => void) =>
    setStopAllSounds(stopAllSounds.concat(stopSound));

  globalShortcut?.register('Control+F1', () =>
    soundboardDomain
      .playRandomSound()
      .then((player) => {
        if (player) registerSound(() => player.stop());
        return '';
      })
      .catch((e) => {
        toast.error('Cannot play random sound');
        console.error(e);
      })
  
  );
  globalShortcut?.register('Control+F2', () =>
  soundboardDomain
    .playLocalSoundByIndex(0)
    .then((player) => {
      if (player) registerSound(() => player.stop());
      return '';
    })
    .catch((e) => {
      toast.error('Cannot play sound in slot 1');
      console.error(e);
    })
);

  globalShortcut?.register('Control+F3', () =>
    soundboardDomain
      .playLocalSoundByIndex(1)
      .then((player) => {
        if (player) registerSound(() => player.stop());
        return '';
      })
      .catch((e) => {
        toast.error('Cannot play sound in slot 2');
        console.error(e);
      })
  );
  
  globalShortcut?.register('Control+F4', () =>
    soundboardDomain
      .playLocalSoundByIndex(2)
      .then((player) => {
        if (player) registerSound(() => player.stop());
        return '';
      })
      .catch((e) => {
        toast.error('Cannot play sound in slot 3');
        console.error(e);
      })
  );
  
  globalShortcut?.register('Control+F5', () =>
    soundboardDomain
      .playLocalSoundByIndex(3)
      .then((player) => {
        if (player) registerSound(() => player.stop());
        return '';
      })
      .catch((e) => {
        toast.error('Cannot play sound in slot 4');
        console.error(e);
      })
  );
  
  globalShortcut?.register('Control+F6', () =>
    soundboardDomain
      .playLocalSoundByIndex(4)
      .then((player) => {
        if (player) registerSound(() => player.stop());
        return '';
      })
      .catch((e) => {
        toast.error('Cannot play sound in slot 5');
        console.error(e);
      })
  );
  
  globalShortcut?.register('Control+F7', () =>
    soundboardDomain
      .playLocalSoundByIndex(5)
      .then((player) => {
        if (player) registerSound(() => player.stop());
        return '';
      })
      .catch((e) => {
        toast.error('Cannot play sound in slot 6');
        console.error(e);
      })
  );
  
  globalShortcut?.register('Control+F8', () =>
    soundboardDomain
      .playLocalSoundByIndex(6)
      .then((player) => {
        if (player) registerSound(() => player.stop());
        return '';
      })
      .catch((e) => {
        toast.error('Cannot play sound in slot 7');
        console.error(e);
      })
  );
  
  return (
    <Router>
      <div className="app-view">
        <TopBarComponent />
        <div className="menu">
          <span className="title">
            <img src={logo} className="icon" alt="logo" />
            Soundboard
          </span>
          <Link className="settings" to="/settings" title="Settings">
            <FaCog className="icon" />
          </Link>
        </div>
        <div className="body">
          <ToastContainer />
          <Switch>
            <Route path="/settings" component={SettingsView} />
            <Route path="/">
              <SoundsView
                stopAllSounds={stopAllSounds}
                registerSound={registerSound}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
