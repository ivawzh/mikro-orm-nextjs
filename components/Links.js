import Link from 'next/link'

export function Links() {
  return (
    <div>
      <p>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </p>
      <p>
        <Link href={'/users'}>
          <a>Users</a>
        </Link>
      </p>
    </div>
  )
}
