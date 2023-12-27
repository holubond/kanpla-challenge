import { Card } from "@/components/Card";
import { Heading } from "@/components/Heading";
import { LocationSearch } from "./LocationSearch";

const URL_PARAM_SEARCH = 'search'

export default async function Home() {
  return (
    <div className="flex justify-center">
      <Card className="mt-5 w-5/6 sm:w-1/2">
        <Heading className="text-center py-4">Select Locations</Heading>
        <LocationSearch urlParam={URL_PARAM_SEARCH} placeholder="Search for location or a group" />
      </Card>
    </div>
  )
}
