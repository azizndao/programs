interface UserNotificationProps {
  params: {
    user: string
  }
  searchParams: {
    n: string
  }
}

export default function UserNotification({
  params,
  searchParams,
}: UserNotificationProps) {
  return (
    <div>
      <pre>{JSON.stringify(params, null, 4)}</pre>
      <pre>{JSON.stringify(searchParams, null, 4)}</pre>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, tempore
      recusandae asperiores perferendis consectetur nemo sed aliquid dolor ea
      nam sequi nihil, incidunt ut sit ipsa error hic voluptas est.
    </div>
  )
}
