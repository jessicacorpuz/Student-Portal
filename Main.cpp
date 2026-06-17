#include <iostream>
#include <string>
using namespace std;

// ICCT Colleges Virtual Tour & Website

int main()
{
    string choice;

    cout << "Welcome to Student Academic Information System – ICCT!" << endl;
    cout << "Welcome to SAIS" <<endl;

    do
    {
        cout << "\n==============================" << endl;
        cout << " ICCT COLLEGES TOUR & WEBSITE " << endl;
        cout << "==============================" << endl;
        cout << "About - About Us" << endl;
        cout << "Tour - Campus Tour" << endl;
        cout << "Courses - Courses Offered" << endl;
        cout << "Contact - Contact Information" << endl;
        cout << "Exit - Exit Program" << endl;

        cout << "\nEnter your choice: ";
        cin >> choice;

        if (choice == "About")
        {
            cout << "\nICCT Colleges - Antipolo Campus" << endl;
            cout << "Address: ICCT Colleges Building, Sumulong Extension Street," << endl;
            cout << "Brgy. San Roque, Antipolo City, Rizal" << endl;
            cout << "(Near Ynares Center / Rizal Provincial Capitol Building)" << endl;
            cout << "\nTrunkline #: (632) 7-216-4273" << endl;
            cout << "Tele-Assistance #: 09171764228" << endl;
            cout << "Email: antipolo@icct.edu.ph" << endl;
        }
        else if (choice == "Tour")
        {
            cout << "\nWelcome to the Campus Tour!" << endl;
            cout << "- Main Entrance Hallway" << endl;
            cout << "- 2ND floor Classrooms and Computer Laboratories" << endl;
            cout << "- 3RD floor Classrooms" << endl;
            cout << "- 4TH floor GYM" << endl;
            cout << "- Library and Student Lounge" << endl;
        }
        else if (choice == "Courses")
        {
            cout << "\nSome Courses Offered:" << endl;
            cout << "- BS Information Technology" << endl;
            cout << "- BS Computer Science" << endl;
            cout << "- BS Business Administration" << endl;
            cout << "- BS Hospitality Management" << endl;
            cout << "- BS Criminology" << endl;
            cout << "- BS Accountancy" << endl;
            cout << "- BS Tourism Management" << endl;
        }
        else if (choice == "Contact")
        {
            cout << "\nFor more details, you may email Antipolo campus " << endl;
            cout << "Email: antipolo@icct.edu.ph" << endl;
            cout << "or contact us through Trunkline or Tele-Assistance." << endl;
            cout << "\nTrunkline #: (632) 7-216-4273" << endl;
            cout << "Tele-Assistance #: 09171764228"  << endl;
        }
        else if (choice == "Exit")
        {
            cout << "\nThank you for taking the ICCT Colleges School Tour & Website" << endl;
        }
        else
        {
            cout << "\nInvalid choice. Please try again." << endl;
        }

    } while (choice != "Exit");

    return 0;
}


