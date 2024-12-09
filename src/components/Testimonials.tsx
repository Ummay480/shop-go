type Review = {
    name: string;
    rating: number;
    review: string;
  };
  
  const Testimonials: React.FC = () => {
    const reviews: Review[] = [
      { name: "Sarah M.", rating: 5, review: "The best shopping experience!" },
      { name: "Alex K.", rating: 4, review: "Great quality and fast delivery." },
      // Add more reviews as necessary
    ];
  
    return (
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Our Happy Customers</h2>
        <div className="flex justify-center space-x-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow-lg">
              <h3 className="font-semibold">{review.name}</h3>
              <p>{'⭐'.repeat(review.rating)}</p>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  