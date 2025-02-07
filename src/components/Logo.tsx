import Image from 'next/image'
import clsx from 'clsx'

import logoImage from '@/images/logo.png'

export function Logo({
  className,
  position = 'left',
}: {
  className?: string
  position?: 'left' | 'right'
}) {
  return (
    <div
      className={clsx(
        'inset-0 overflow-hidden',
        className,
      )}
    >
      <Image
        className={clsx(
          position === 'left' &&
            'left-0',
          position === 'right' &&
            'left-full',
        )}
        src={logoImage}
        alt=""
        width={200}
        style={{ height: 'auto' }}
        priority
        unoptimized
      />
    </div>
  )
}
