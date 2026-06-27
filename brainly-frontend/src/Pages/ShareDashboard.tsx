import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BACKEND_URL } from "../config"
import { Card } from "../components/ui/Card"
import { DocumentIcon } from "../components/Icon/Document"
import { Twitter } from "../components/Icon/Twitter"
import { YoutubeIcon } from "../components/Icon/YoutubeIcon"
import { LinkIcon } from "../components/Icon/LinkIcon"


export function ShareDashboard() {
  const { shareLink } = useParams();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSharedContent() {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/brain/${shareLink}`
        );
        setContent(response.data.content); 
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    if (shareLink) {
      fetchSharedContent();
    }
  }, [shareLink]);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-gray-400/60 flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-gray-400/70 p-8">
      <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {content?.length > 0 ? (
          content.map(({type , link ,body ,title }) => 
            <Card 
              body={body} 
              variant={type} 
              link={link} 
              text={title}
              leftIcon={type === 'article' ? <DocumentIcon size='md'/> : 
                        type === 'tweet' ? <Twitter size='md'/> :
                        type === 'youtube' ? <YoutubeIcon size='md'/>: <LinkIcon size='md'/>
            }

            />
          )
        ) : (
          <div className="col-span-3 text-center">
            <p className="text-white text-xl">No content shared yet</p>
          </div>
        )}
      </div>
    </div>
  );
}