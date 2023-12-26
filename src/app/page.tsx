import { Card } from "@/components/Card";
import { Heading } from "@/components/Heading";
import { Search } from "@/components/Search";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Card className="mt-5 w-5/6 sm:w-1/2">
        <Heading className="text-center py-4">Select Locations</Heading>
        <Search placeholder="Search location or a group"/>
      </Card>
    </div>
  )
}
