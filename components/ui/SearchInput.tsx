'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const SearchInput = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const initialTopic = searchParams.get('topic') || ''
  const [searchQuery, setSearchQuery] = useState(initialTopic)

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())

      if (searchQuery) {
        params.set('topic', searchQuery)
      } else {
        params.delete('topic')
      }

      const url = `${pathname}?${params.toString()}`
      console.log('router.push to:', url)
      router.push(url)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchQuery, pathname, router, searchParams])

  return (
    <div className='relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
      <Image
        src="/icons/search.svg"
        alt='search'
        width={15}
        height={15}
      /> 
        <input
          placeholder="Search topic ..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className='outline-none'
        />
    </div>


  )
}

export default SearchInput
