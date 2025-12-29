import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import events from '@/lib/constants'

const Page = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
     
      <h1 className="text-center text-4xl sm:text-5xl font-bold leading-tight">
        The everyday <br />
        events you can&apos;t miss
      </h1>

     
      <p className="text-center mt-5 text-gray-600 text-lg">
        Hackathons, meetups, and conferences — all in one place
      </p>

    
      <div className="flex justify-center mt-8">
        <ExploreBtn />
      </div>

   
      <div className="mt-20 space-y-7">
        <h3 className="text-2xl font-semibold">
          Featured events
        </h3>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <li key={event.title} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>

    </section>
  )
}

export default Page
