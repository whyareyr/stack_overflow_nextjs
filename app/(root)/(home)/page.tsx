import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/card/QuestionCard";
import { getQuestions } from "@/lib/actions/question.action";
import result from "postcss/lib/result";

// const questions = [
//   {
//     _id: "1",
//     title: "How to be great at CSS?",
//     tags: [
//       { _id: "1", name: "CSS" },
//       { _id: "2", name: "SQL" },
//     ],
//     author: { _id: "1", name: "Hayyaan Raza", picture: "john.jpg" },
//     upvotes: 25,
//     views: 120,
//     answers: [],
//     createdAt: new Date("2023-03-15T10:30:00Z"),
//   },
//   {
//     _id: "2",
//     title: "Best practices for SQL optimization?",
//     tags: [
//       { _id: "2", name: "SQL" },
//       { _id: "3", name: "Database" },
//     ],
//     author: { _id: "2", name: "Ali Raza Ansari", picture: "jo2hn.jpg" },
//     upvotes: 32,
//     views: 150,
//     answers: [],
//     createdAt: new Date("2023-04-22T14:45:00Z"),
//   },
//   {
//     _id: "3",
//     title: "Responsive design tips for beginners?",
//     tags: [
//       { _id: "1", name: "CSS" },
//       { _id: "4", name: "Web Development" },
//     ],
//     author: { _id: "3", name: "John Raza", picture: "johnr.jpg" },
//     upvotes: 18,
//     views: 90000,
//     answers: [],
//     createdAt: new Date("2023-05-10T08:15:00Z"),
//   },
// ];

export default async function Home() {
  const result = await getQuestions({});

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link
          href="/ask-question"
          className="flex justify-end max-sm:w-full sm:items-center"
        >
          <Button
            className="primary-gradient min-h-[46px] 
          px-4 py-3 !text-light-900
          "
          >
            Ask A Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              answers={question.answers}
              upvotes={question.upvotes}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
}
