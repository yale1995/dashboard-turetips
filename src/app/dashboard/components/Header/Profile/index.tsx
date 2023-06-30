import * as Dialog from '@radix-ui/react-dialog'

import { Users, UserList } from '@/assets/icons/phosphorIcons'
import { NewAccountModal } from '../NewAccountModal'
import { Heading } from '@/components/Text/Heading'
import { Paragraph } from '@/components/Text/Paragraph'
import { Avatar } from '../Avatar'
import { useAuth } from '@/hooks/useAuth'

export function Profile() {
  const { currentUser } = useAuth()
  const userFullName = `${currentUser?.firstName} ${currentUser?.lastName}`
  const userInitials = `${currentUser?.firstName[0]}${currentUser?.lastName[0]}`

  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-4 border-r-2 pr-10">
        <Dialog.Root>
          <Dialog.Trigger title="Adicionar uma nova conta">
            <UserList
              size={22}
              className="text-gray-300 hover:text-indigo-500"
            />
          </Dialog.Trigger>

          <NewAccountModal />
        </Dialog.Root>

        <button>
          <Users size={22} className="text-gray-300 hover:text-indigo-500" />
        </button>
      </div>
      <div>
        <Heading size="sm" className="text-gray-300 font-normal text-right ">
          {userFullName}
        </Heading>
        <Paragraph size="md" className="text-gray-500">
          {currentUser?.email}
        </Paragraph>
      </div>
      <Avatar sourceImg={currentUser?.photo} userInitials={userInitials} />
    </div>
  )
}
