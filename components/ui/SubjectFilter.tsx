'use client'

import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { subjects } from '@/constants'

const SubjectFilter = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  // `none` = no subject filter
  const currentSubject = searchParams.get('subject') || 'none'
  const [selectedSubject, setSelectedSubject] = useState(currentSubject)

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedSubject !== 'none') {
      params.set('subject', selectedSubject)
    } else {
      params.delete('subject')
    }

    const newUrl = `${pathname}?${params.toString()}`
    router.push(newUrl)
  }, [selectedSubject, pathname, router, searchParams])

  return (
    <Select value={selectedSubject} onValueChange={setSelectedSubject}>
      <SelectTrigger className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
        <SelectValue placeholder="Select subject" />
      </SelectTrigger>

      <SelectContent className="z-50">
        <SelectItem value="none">All Subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem
            key={subject}
            value={subject}
            className="capitalize"
          >
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SubjectFilter
