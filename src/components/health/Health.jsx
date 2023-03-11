import { MoreTime, PendingActionsOutlined, PermPhoneMsgOutlined } from '@mui/icons-material';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import React from 'react'
import './health.css'

const Health = () => {
  return (
    <div className='health'>
      <div className="text-h">
      <span>We are not just a health centre, but a family that cares.</span>
      <span>Your Health is our Priority</span>
      </div>
      <div className="grid">
      <div style={{width: '15rem', height: '15rem', background: 'cyan', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',borderRadius: '10px'}}>
<AddLocationAltOutlinedIcon style={{fontSize: '3rem', color: 'navy'}} />
<span style={{margin: '1rem', fontWeight: '400'}}>Get directed to the nearest medical centre that offers the service you need</span>
      </div>
      <div style={{width: '15rem', height: '15rem', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',borderRadius: '10px', background: 'lightblue'}}>
        <PermPhoneMsgOutlined style={{fontSize: '3rem', color: 'blue'}} />
        <span style={{margin: '1rem', fontWeight: '400'}} >Medical emergency? No worries, we are always just one phone call away</span>
      </div>
      <div style={{width: '15rem', height: '15rem', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',borderRadius: '10px', background: 'lightgreen'}}>
        <MoreTime style={{fontSize: '3rem', color: 'green'}} />
        <span style={{margin: '1rem', fontWeight: '400'}} >Our doctors and health specialists are available round the clock</span>
      </div>
      <div style={{width: '15rem', height: '15rem', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',borderRadius: '10px', background: 'orange'}}>
        <PendingActionsOutlined style={{fontSize: '3rem', color: 'orangered'}}/>
        <span style={{margin: '1rem', fontWeight: '400'}} >In case of any medical issues book an early appointment at the nearest hospital or with the available health practitioner</span>
      </div>
      </div>
      
    </div>
  )
}

export default Health
