import Image from 'next/image';
import useSWR from 'swr';

export default function SingleBookData({book}) {
    // console.log("book")
    // console.log(book)
    const { data, error } = useSWR(book.book_file, url => getBookImage(book.book_file));
    
    if (error) return <div>failed to load</div>;
    else if (!data) return <div>loading...</div>;
    else {
        //console.log(data.details[0].data)
        return (
            <div>
                {book.title}
                <Image src={data}
                    width={140}
                    height={140}
                    alt = {book.title_image}
                />
            </div>
        )
    }
    
  }

  
  export  async function getBookImage(uri) {

    // Get external data from the file system, API, DB, etc.
    var resp;
    let username = 'admin';
    let password = 'admin8122';
    //console.log(btoa(':'));
    Buffer.from(`${username}:${password}`, 'base64');
    let auth = "Basic "+  btoa(`${username}:${password}`); //Buffer.from(`${username}:${password}`, 'base64');//
    //console.log
    //return {"hello":"test"}
    const data =  await fetch(`http://localhost:8000/${uri}`,{method: 'GET',//headers: {'Authorization': auth}
    }).then(response => {  
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
            
          }

        return response
        }).then(response => response.blob())
        .then(imageBlob => {
            // Then create a local URL for that image and print it 
            const imageObjectURL = URL.createObjectURL(imageBlob);

            console.log(imageObjectURL);
            return imageObjectURL;
        })
    
            return  await data
    
}
 
