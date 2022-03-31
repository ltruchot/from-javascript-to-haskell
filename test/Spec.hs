import Test.Tasty
import Test.Tasty.HUnit

main :: IO ()
main = do
  defaultMain (testGroup "Our Library Tests" [testAddition ])

testAddition :: TestTree
testAddition = testCase "test addition" 
  (assertEqual "for (+) 1 2," 3 ((+) 1 2))

