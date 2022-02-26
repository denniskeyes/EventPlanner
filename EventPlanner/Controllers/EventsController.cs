using EventPlanner.EntityFramework;
using EventPlanner.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventPlanner.Controllers
{
    //TODO (future): Enforce authorization with [Authorize] attribute
    [Route("api/controller")]
    public class EventsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EventsController(AppDbContext context)
        {
            _context = context;
        }
        
        // Gets a single event
        [HttpGet("event/{id}")]
        public async Task<ActionResult<Event>> GetEvent(int id)
        {
            var fetchedEvent = await _context.Events.FindAsync(id);

            if (fetchedEvent == null)
            {
                return NotFound();
            }

            return fetchedEvent;
        }
        
        // Gets all events
        [HttpGet("events")]
        public async Task<ActionResult<List<Event>>> GetAllEvents()
        {
            // TODO (future): Refactor, as this can be a memory hog for large amounts of data
            var allEvents = await _context.Events.ToListAsync();

            return allEvents;
        }

        // Create a new event
        // TODO (future): tie this in with user credentials/authorization to allow event creation
        [HttpPost("create-event")]
        public async Task<ActionResult<Event>> CreateEvent([FromBody] Event newEvent)
        {
            if (newEvent == null)
            {
                return BadRequest();
            }

            var result = _context.Events.Add(newEvent);

            if (result == null) {
                return NotFound();
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEvent", new { id = newEvent.Id }, newEvent);
        }

        // Deletes a single given event
        // TODO (future): tie this in with user credentials/authorization to allow event deletion
        [HttpDelete("delete-event/{id}")]
        public async Task<ActionResult<Event>> DeleteEvent(int id)
        {
            var eventToDelete = _context.Events.SingleOrDefault(e => e.Id == id);
            
            if (eventToDelete == null)
            {
                return NotFound(); // Don't try to delete an event that doesn't exist
            }

            _context.Events.Remove(eventToDelete);
            await _context.SaveChangesAsync();

            return Ok(eventToDelete);
        }

        // TODO (future): tie this in with user credentials/authorization to allow event deletion
        [HttpPut("update-event/{id}")]
        public async Task<ActionResult<Event>> UpdateEvent(int id, [FromBody] Event updatedEvent)
        {
            // Check if event's id exists in db
            if (!_context.Events.Any(e => e.Id == id))
            {
                return NotFound(); // return message that says "event not found"
            }

            updatedEvent.Id = id;

            // Update entry with updatedEvent
            _context.Events.Update(updatedEvent);
            await _context.SaveChangesAsync();

            return Ok(updatedEvent);
        }
    }
}
