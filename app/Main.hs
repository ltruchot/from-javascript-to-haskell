module Main where
import Solution1 (getAdultsAgesAverage)

import Persons (persons)


main :: IO ()
main = do
        let result = getAdultsAgesAverage persons
        putStrLn . show $ result -- 35.5

-- equivalence
-- putStrLn . show -> print