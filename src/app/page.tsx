import { Card } from "@/components/Card";
import { Heading } from "@/components/Heading";
import { Search } from "@/components/Search";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Card className="mt-5">
        <Heading>Select Locations</Heading>
        <Search placeholder="Search location or a group"/>

      </Card>
    </div>
  )
}
