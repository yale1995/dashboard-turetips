'use client'
import * as RadixAvatar from '@radix-ui/react-avatar'

interface AvatarProps {
  userInitials: string
  sourceImg: string | undefined
}

export function Avatar({ sourceImg, userInitials }: AvatarProps) {
  return (
    <RadixAvatar.Root className="inline-flex items-center justify-center overflow-hidden w-16 h-16 rounded-full bg-gray-800">
      <RadixAvatar.Image
        className="w-full h-full object-cover rounded-full"
        src={sourceImg}
        alt="profile image"
      />
      <RadixAvatar.Fallback className="text-2xl flex justify-center items-center w-full h-full bg-gray-300 text-indigo-600">
        {userInitials}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
