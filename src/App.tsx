import { Button, Checkbox } from '@headlessui/react'
import { CheckIcon, PencilIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className='flex justify-around items-center w-full'>
      <Button className='ml-1 inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700'>
        <PencilIcon className='h-4 w-4' />
        Save changes
      </Button>
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className='group flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-2 border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 data-checked:border-blue-500 data-checked:bg-blue-500'
      >
        <CheckIcon className='hidden h-4 w-4 text-white group-data-checked:block' />
      </Checkbox>
    </div>
  )
}

export default App
