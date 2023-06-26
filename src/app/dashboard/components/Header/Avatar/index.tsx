'use client'
import * as RadixAvatar from '@radix-ui/react-avatar'

export function Avatar() {
  return (
    <RadixAvatar.Root className="inline-flex items-center justify-center overflow-hidden w-16 h-16 rounded-full bg-gray-800">
      <RadixAvatar.Image
        className="w-full h-full object-cover rounded-full"
        src="http://github.com/caiorodrigo1.png"
        alt="profile image"
      />
      <RadixAvatar.Fallback className="text-2xl flex justify-center items-center w-full h-full bg-gray-300 text-indigo-600">
        CR
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
