{-# LANGUAGE DeriveGeneric  #-}
module Persons (
  Person,
  age,
  name,
  persons
  
) where

import GHC.Generics ( Generic )

data Person = Person { name :: [Char]
                     , age :: Float
                     } deriving (Show, Generic)

persons :: [Person]
persons = [ Person { name = "loic",     age = 37 }
          , Person { name = "sonemany", age = 34 }
          , Person { name = "swann",    age = 2 }
          ]
