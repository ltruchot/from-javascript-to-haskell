module Solution1 (
        getAdultsAgesAverage
                 ) where
import Control.Applicative (Applicative(liftA2))
import Persons ( Person, age )


getAdultsAgesAverage :: [Person] -> Float
getAdultsAgesAverage = liftA2 (/) last (fromIntegral . length). drop 1 . scanl (+) 0 . filter (> 18). map age

