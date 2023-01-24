import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = () => {
  return (
    <div className="flex-1">
      <div className="bg-green-100 p-3">
        <h2>Z.M.INTERNATIONAL SCHOOL TEACHERS LIST</h2>
      </div>
      <br />
      <div className="border border-gray-200 mb-5 bg-white">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5616AQHKiBNugT69GQ/profile-displaybackgroundimage-shrink_350_1400/0/1638953779438?e=1674691200&v=beta&t=XlBlsxc4Uc8VysyysXrC7gBIwVtjETOyYejO5P7RFe4"
          alt="no magic"
        />
        <div className="p-10 -mt-28">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQGWy7nn6aUz2Q/profile-displayphoto-shrink_200_200/0/1627676865563?e=1674691200&v=beta&t=MEVUibO-Z_SkROM-oxpqr06kXI90nSC5LDWcHTHXJrM"
            className="rounded-full h-38 w-32 border-4 border-white relative"
            alt=""
          />
          <h2 className="text-xl">Hobayer Golondaz Tushar</h2>
          <p>Full-Stack MERN Developer || JavaScript</p>
          <p className="text-sm">
            Mymensingh Division, Bangladesh{' '}
            <Link to="/profile" className="text-blue-500">
              Contact info
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
