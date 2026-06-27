import { useEffect, useState } from 'react'
import { Button } from '../components/ui/Button'
import { Plusicon } from '../components/Icon/PlusIcon'
import { Shareicon } from '../components/Icon/ShareIcon'
import { Card } from '../components/ui/Card'
import { AddContentCard } from '../components/ui/AddContent'
import { SideBar} from '../components/ui/SideBar'
import { useContent } from '../hooks/useContent'
import { ShareContent } from '../components/ui/ShareContent'
import { Profile } from '../components/ui/Profile'
import { ProfileDetail } from '../components/ui/ProfileDetail'
import { Twitter } from '../components/Icon/Twitter'
import { YoutubeIcon } from '../components/Icon/YoutubeIcon'
import { LinkIcon } from '../components/Icon/LinkIcon'
import { DocumentIcon } from '../components/Icon/Document'
import { DeleteIcon } from '../components/Icon/DeleteIcon'
import axios from 'axios'
import { BACKEND_URL } from '../config'


export function Dashboard() {
  const [mount, setMount] = useState(false)
  const [shareMount, setShareMount] = useState(false)
  const [profileMount , setProfileMount] = useState(false)
  const {content , refresh} = useContent()

  useEffect(()=>{
     refresh()
  },[mount])  
  
 function handleDelete(contentId : string){
     axios.delete(`${BACKEND_URL}/api/v1/content` ,{ data: {
          contentId
    } , headers :{
        authorization  :localStorage.getItem("token")
    }}).then((response) => {
         alert(response.data.message)
         refresh()
    })
  }

  function handleShare(){
     setShareMount(true)
  }
   


  return (
    <div>
      <SideBar  clickTweet={()=>setTweet(true)} clickDocument={()=>setDocument(true)} clickYoutube={()=>setYoutube(true)} />
      <ShareContent open={shareMount} onClose={()=>setShareMount(false)}/>
      <AddContentCard open={mount} onClose={()=>setMount(false)}/> 
      <div className='p-4 ml-72 min-h-screen bg-gray-100'>
        <div className='flex  justify-between'>
            <div className='flex p-3  '>
                <Button variant='Primary' startIcon={<Plusicon size='sm'/>} size='sm' text='add content' onClick={()=>setMount(true)}/>
                <Button variant='Secondary' startIcon={<Shareicon size='sm'/>}  size='sm' text='Share brain' onClick={()=>setShareMount(true)}/>
            </div>
              <ProfileDetail open={profileMount} onClose={()=>setProfileMount(false)}/>
            <div onClick={()=>setProfileMount(true)} className='p-3'>
                  <Profile/>
            </div>

        </div>
      <div className='gap-4 grid grid-cols-3'>
        {content?.map(({type , link , body , title , tags , _id }) => 
       <Card body={body} variant={type} link={link} text={title}
        leftIcon={type === 'article' ? <DocumentIcon size='md'/> : 
                  type === 'tweet' ? <Twitter size='md'/> :
                  type === 'youtube' ? <YoutubeIcon size='md'/>: <LinkIcon size='md'/>
                 } onClick1={handleShare}  RightIcon1={<Shareicon  size='md'/>}   onClick2={()=>{handleDelete(_id)}} RightIcon2={<DeleteIcon size='md'/>}  tag={tags.title} />)}
        </div>
       </div> 
    </div>
  )
}

