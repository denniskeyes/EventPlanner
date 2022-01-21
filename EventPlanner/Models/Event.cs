using EventPlanner.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventPlanner.Models
{
    public class Event : EntityBase
    {
        public string Name { get; set; }

        public string Presenter { get; set; }

        public DateTime Date { get; set; }

        public int Duration { get; set; }

        public string Location { get; set; }

        public string Description { get; set; }
    }
}
