'use client'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

type DropdownProps = {
  children: React.ReactNode
  title: string
}

export default function Dropdown({
  children,
  title
}: DropdownProps)