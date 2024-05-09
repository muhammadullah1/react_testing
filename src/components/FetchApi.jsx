import { Suspense, useState, useEffect } from 'react';

async function fetchData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await response.json();
}

function FetchApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((result) => setData(result));
  }, []);

  return (
    <Suspense fallback={<div>Loading data...</div>}>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <h1 className='text-center'>Posts</h1>
          {data.map((item) => (
            <div key={item.id} className='-my-8 divide-y-2 divide-gray-100'>
              <div className='py-8 flex flex-wrap md:flex-nowrap'>
                <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
                  <span className='font-semibold title-font text-gray-700'>
                    {item.id}
                  </span>
                  <span className='mt-1 text-gray-500 text-sm'>12 Jun 2019</span>
                </div>
                <div className='md:flex-grow'>
                  <h2 className='text-2xl font-medium text-gray-900 title-font mb-2'>
                    {item.title}
                  </h2>
                  <p className='leading-relaxed'>
                    {item.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Suspense>
  );
}

export default FetchApi;
