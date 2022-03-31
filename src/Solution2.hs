{-# LANGUAGE FlexibleContexts, MonoLocalBinds #-}

module Solution2     (
        getAsyncAdultsAgesAverage
    ) where

        
import Control.Applicative (Applicative(liftA2))
import qualified Data.ByteString.Lazy as B
import Data.Aeson (decode, FromJSON)
import GHC.Generics ( Generic )
import Data.ByteString ( ByteString )
import Persons (Person)
import Solution1 ( getAdultsAgesAverage )



instance FromJSON Person

getJSON :: FilePath -> IO B.ByteString
getJSON = B.readFile 

decodePersons :: FromJSON Person => B.ByteString -> Maybe [Person]
decodePersons = decode


extractPersons :: FilePath -> IO [Person]
extractPersons filePath = do
        maybePersons <- decodePersons <$> getJSON filePath
        case maybePersons of
                Just content -> return content
                Nothing -> return []
                
getAsyncAdultsAgesAverage :: FilePath -> IO Float
getAsyncAdultsAgesAverage filePath = do
        getAdultsAgesAverage <$> extractPersons filePath

