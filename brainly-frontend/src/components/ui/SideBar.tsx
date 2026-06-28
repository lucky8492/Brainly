
import { Twitter } from "../Icon/Twitter"
import { SideBarComp } from "./SideBarComp"
import { YoutubeIcon } from "../Icon/YoutubeIcon"
import { DocumentIcon } from "../Icon/Document"
import { LinkIcon } from "../Icon/LinkIcon"
import { TagsIcon } from "../Icon/TagsIcon"


export const SideBar = ({clickTweet , clickYoutube , clickDocument}:any) =>{


    return<div>
        <div className="bg-white w-72 border-r border-r-slate-300 h-screen fixed left-0 top-0">
           <div className="flex  ">
               <img className="w-15 h-15" src="https://t4.ftcdn.net/jpg/05/81/69/91/360_F_581699110_zG6mpCdtyK0lAvXg89DTrbAFbEdhCrVb.jpg"/>
               <div className="font-bold p-4 text-xl">Brainly</div>
           </div>
           <div className="p-2 flex-row ml-5">
          <div onClick={clickTweet} className="p-2">

            <SideBarComp  logo={<Twitter size="md"/>} text="Tweets"/>
          </div>
          <div onClick={clickYoutube}  className="p-2">

            <SideBarComp logo={<YoutubeIcon size="md"/>} text="Video"/>
          </div>
           <div  onClick={clickDocument} className="p-2">

            <SideBarComp logo={<DocumentIcon size="md"/>} text="Document"/>
           </div>
           <div className="p-2">

            <SideBarComp logo={<LinkIcon size="md"/>} text="Link"/>
           </div>
           <div className="p-2">

            <SideBarComp logo={<TagsIcon size="md"/>} text="Tags"/>
           </div>
           </div>
        </div>
    </div>
}