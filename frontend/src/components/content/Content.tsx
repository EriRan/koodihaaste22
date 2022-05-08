import { Route, Routes } from 'react-router-dom'
import { ArchiveContent } from './archive/ArchiveContent'
import { RestaurantContent } from './restaurant/RestaurantContent'
import { VotesContent } from './votes/VotesContent'

export function Content() {
  return (
    <Routes>
      <Route path="restaurants" element={<RestaurantContent />} />
      <Route path="votes" element={<VotesContent />} />
      <Route path="archive" element={<ArchiveContent />} />
    </Routes>
  )
}
