import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BACKEND_URL } from "../config"
import { Shareicon } from "../components/Icon/ShareIcon"
import { Card } from "../components/ui/Card"


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
          content.map((item) => (
            <Card 
              body={item.body || ''} 
              variant={item.type} 
              link={item.link || ''} 
              text={item.title}
              leftIcon={<Shareicon size='sm'/>}  
              RightIcon1={<Shareicon size='sm'/>} 
              RightIcon2={<Shareicon size='sm'/>}
            />
          ))
        ) : (
          <div className="col-span-3 text-center">
            <p className="text-white text-xl">No content shared yet</p>
          </div>
        )}
      </div>
    </div>
  );
}